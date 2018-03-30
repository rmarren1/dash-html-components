
import React from 'react';
import PropTypes from 'prop-types';

const Audio = (props) => {
    if (props.fireEvent || props.setProps) {
        return (
            <audio
                onClick={() => {
                    if (props.setProps) props.setProps({n_clicks: props.n_clicks + 1});
                    if (props.fireEvent) props.fireEvent({event: 'click'});
                }}
                {...props}
            >
                {props.children}
            </audio>
        );
    } else {
        return (
            <audio {...props}>
                {props.children}
            </audio>
        );
    }
};

Audio.defaultProps = {
    n_clicks: 0
};

Audio.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * A wild-card data-* attribute
     */
    'data-*': PropTypes.string,

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.integer,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,
    

    /**
     * The audio or video should play as soon as possible.
     */
    'autoPlay': PropTypes.string,

    /**
     * Indicates whether the browser should show playback controls to the user.
     */
    'controls': PropTypes.string,

    /**
     * How the element handles cross-origin requests
     */
    'crossOrigin': PropTypes.string,

    /**
     * Indicates whether the media should start playing from the start when it's finished.
     */
    'loop': PropTypes.string,

    /**
     * Indicates whether the audio will be initially silenced on page load.
     */
    'muted': PropTypes.string,

    /**
     * Indicates whether the whole resource, parts of it or nothing should be preloaded.
     */
    'preload': PropTypes.string,

    /**
     * The URL of the embeddable content.
     */
    'src': PropTypes.string,

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

    'dashEvents': PropTypes.oneOf(['click'])
    
};

export default Audio;
