
import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

const Track = (props) => {
    return (
        <track
            onClick={() => {
                if (props.setProps) {
                    props.setProps({
                        n_clicks: props.n_clicks + 1,
                        n_clicks_timestamp: Date.now()
                    })
                }
                if (props.fireEvent) props.fireEvent({event: 'click'});
            }}
            {...omit(['n_clicks', 'n_clicks_timestamp'], props)}
        >
            {props.children}
        </track>
    );
};

Track.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1
};

Track.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.element,
      PropTypes.oneOf([null]),
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        PropTypes.element,
          PropTypes.oneOf([null])
        ])
      )
    ]),

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    'n_clicks_timestamp': PropTypes.number,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,
    

    /**
     * Indicates that the track should be enabled unless the user's preferences indicate something different.
     */
    'default': PropTypes.string,

    /**
     * Specifies the kind of text track.
     */
    'kind': PropTypes.string,

    /**
     * Specifies a user-readable title of the text track.
     */
    'label': PropTypes.string,

    /**
     * The URL of the embeddable content.
     */
    'src': PropTypes.string,

    /**
     *
     */
    'srcLang': PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    'accessKey': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    'contentEditable': PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    'contextMenu': PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    'dir': PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    'draggable': PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    'hidden': PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    'lang': PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    'spellCheck': PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    'style': PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    'tabIndex': PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    'title': PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    'dashEvents': PropTypes.oneOf(['click']),
    
    'setProps': PropTypes.func
    
};

export default Track;
