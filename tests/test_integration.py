import base64
from datetime import datetime
import io
import itertools
from multiprocessing import Value
import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
from textwrap import dedent
import time
try:
    from urlparse import urlparse
except ImportError:
    from urllib.parse import urlparse

import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

from .IntegrationTests import IntegrationTests
from .utils import assert_clean_console


class Tests(IntegrationTests):
    def setUp(self):
        pass

    def wait_for_element_by_css_selector(self, selector):
        start_time = time.time()
        while time.time() < start_time + 20:
            try:
                return self.driver.find_element_by_css_selector(selector)
            except Exception as e:
                pass
            time.sleep(0.25)
        raise e

    def wait_for_text_to_equal(self, selector, assertion_text):
        start_time = time.time()
        while time.time() < start_time + 20:
            el = self.wait_for_element_by_css_selector(selector)
            try:
                return self.assertEqual(el.text, assertion_text)
            except Exception as e:
                pass
            time.sleep(0.25)
        raise e

    def snapshot(self, name):
        if 'PERCY_PROJECT' in os.environ and 'PERCY_TOKEN' in os.environ:
            python_version = sys.version.split(' ')[0]
            print('Percy Snapshot {}'.format(python_version))
            self.percy_runner.snapshot(name=name)

    def test_click(self):
        call_count = Value('i', 0)

        app = dash.Dash()
        app.layout = html.Div([
            html.Div(id='container'),
            html.Button('Click', id='button', n_clicks=0, n_clicks_previous=0)
        ])

        output_string = "You have clicked the button {} times." + \
                        "Previously, you have clicked the button {} times."

        @app.callback(Output('container', 'children'),
                      [Input('button', 'n_clicks')],
                      [State('button', 'n_clicks_previous')])
        def update_output(n_clicks, n_clicks_previous):
            call_count.value += 1
            return output_string.format(n_clicks, n_clicks_previous)

        self.startServer(app)

        self.wait_for_element_by_css_selector('#container')

        self.wait_for_text_to_equal(
            '#container', output_string.format(0, 0))
        self.assertEqual(call_count.value, 1)
        self.snapshot('button initialization')

        self.driver.find_element_by_css_selector('#button').click()

        self.wait_for_text_to_equal(
            '#container', output_string.format(1, 0))
        self.assertEqual(call_count.value, 2)
        self.driver.find_element_by_css_selector('#button').click()
        self.snapshot('button click one')

        self.wait_for_text_to_equal(
            '#container', output_string.format(2, 1))
        self.assertEqual(call_count.value, 3)
        self.snapshot('button click')
