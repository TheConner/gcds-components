/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GcdsButton {
        /**
          * Set the main style
         */
        "buttonRole": 'primary' | 'secondary' | 'destructive' | 'skip-to-content';
        /**
          * Set the style variant
         */
        "buttonStyle": 'solid' | 'outline' | 'text-only';
        /**
          * Set button types
         */
        "buttonType": 'submit' | 'reset' | 'button' | 'link';
        /**
          * StyleAPI: custom background color.
         */
        "customBackgroundColor": string | undefined;
        /**
          * StyleAPI: custom border color.
         */
        "customBorderColor": string | undefined;
        /**
          * StyleAPI: custom border style.
         */
        "customBorderStyle": string | undefined;
        /**
          * StyleAPI: custom border weight.
         */
        "customBorderWeight": string | undefined;
        /**
          * StyleAPI: custom box shadow.
         */
        "customBoxShadow": string | undefined;
        /**
          * StyleAPI: custom btext transform.
         */
        "customCapitalization": string | undefined;
        /**
          * StyleAPI: custom display.
         */
        "customDisplay": string | undefined;
        /**
          * StyleAPI: custom margin.
         */
        "customMargin": string | undefined;
        /**
          * The disabled attribute for a <button> element.
         */
        "disabled": boolean;
        /**
          * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
         */
        "download": string | undefined;
        /**
          * Focus element
         */
        "focusElement": () => Promise<void>;
        /**
          * The href attribute specifies the URL of the page the link goes to
         */
        "href": string | undefined;
        /**
          * The name attribute specifies the name for a <button> element.
         */
        "name": string | undefined;
        /**
          * The rel attribute specifies the relationship between the current document and the linked document
         */
        "rel": string | undefined;
        /**
          * The target attribute specifies where to open the linked document
         */
        "target": string | undefined;
    }
    interface GcdsErrorMessage {
        /**
          * Error message for an invalid form field.
         */
        "message": string;
        /**
          * Id attribute for the error message.
         */
        "messageId": string;
    }
    interface GcdsGrid {
        /**
          * If total grid size is less than the size of its grid container, this property aligns the grid along the block (column) axis
         */
        "alignContent"?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
        /**
          * Aligns grid items along the block (column) axis
         */
        "alignItems"?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
        /**
          * Shorthand for column-gap + row-gap Specifies the width of the gutters between columns and rows
         */
        "gap"?: 'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';
        /**
          * Defines grid container size
         */
        "gridContainer"?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs';
        /**
          * Defines element as grid or inline-grid container
         */
        "gridDisplay"?: 'grid' | 'inline-grid';
        /**
          * Set tag for grid container
         */
        "gridTag": string;
        /**
          * Defines the columns of the grid Option to set different layouts for desktop | tablet | default
         */
        "gridTemplateColumns"?: string;
        "gridTemplateColumnsDesktop"?: string;
        "gridTemplateColumnsTablet"?: string;
        /**
          * If total grid size is less than the size of its grid container, this property aligns the grid along the inline (row) axis
         */
        "justifyContent"?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
        /**
          * Aligns grid items along the inline (row) axis
         */
        "justifyItems"?: 'center' | 'end' | 'start' | 'stretch';
        /**
          * Sets both the align-content + justify-content properties
         */
        "placeContent"?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
        /**
          * Sets both the align-items + justify-items properties
         */
        "placeItems"?: 'center' | 'end' | 'start' | 'stretch';
    }
    interface GcdsHint {
        /**
          * Hint displayed below the label and above the input field.
         */
        "hint"?: string;
        /**
          * Id attribute for the hint.
         */
        "hintId": string;
    }
    interface GcdsInput {
        /**
          * Specifies if an input element is disabled or not.
         */
        "disabled"?: boolean;
        /**
          * Error message for an invalid input element.
         */
        "errorMessage"?: string;
        /**
          * Specifies if the label is hidden or not.
         */
        "hideLabel"?: boolean;
        /**
          * Hint displayed below the label and above the input field.
         */
        "hint"?: string;
        /**
          * Id + name attribute for an input element.
         */
        "inputId": string;
        /**
          * Form field label
         */
        "label": string;
        /**
          * Specifies if a form field is required or not.
         */
        "required"?: boolean;
        /**
          * Size attribute for an input element. Defines max-length as well.
         */
        "size"?: number;
        /**
          * Set Input types
         */
        "type": 'email' | 'number' | 'password' | 'search' | 'text' | 'url';
        /**
          * Default value for an input element.
         */
        "value": string;
    }
    interface GcdsLabel {
        /**
          * Specifies if the label is hidden or not.
         */
        "hideLabel"?: boolean;
        /**
          * Form field label
         */
        "label": string;
        /**
          * Defines the label's for attribute.
         */
        "labelFor": string;
        /**
          * Specifies if a form field is required or not.
         */
        "required"?: boolean;
    }
    interface GcdsSiteMenu {
        /**
          * Menu alignment
         */
        "menuAlignment": 'left' | 'center' | 'right' | 'split';
        /**
          * Desktop layout
         */
        "menuDesktopLayout": 'topbar' | 'sidebar';
        /**
          * Mobile layout
         */
        "menuMobileLayout": 'drawer';
        /**
          * Sticky navigation flag
         */
        "menuPosition": 'static' | 'sticky';
    }
    interface GcdsTextarea {
        /**
          * Defines width for textarea cols (the min-width for textarea's is 50%).
         */
        "cols"?: number;
        /**
          * Specifies if a textarea element is disabled or not.
         */
        "disabled"?: boolean;
        /**
          * Error message for an invalid textarea element.
         */
        "errorMessage"?: string;
        /**
          * Specifies if the label is hidden or not.
         */
        "hideLabel"?: boolean;
        /**
          * Hint displayed below the label and above the textarea field.
         */
        "hint"?: string;
        /**
          * Form field label
         */
        "label": string;
        /**
          * Specifies if a form field is required or not.
         */
        "required"?: boolean;
        /**
          * Default value for textarea rows.
         */
        "rows"?: number;
        /**
          * Sets the maxlength attribute for the textarea element.
         */
        "textareaCharacterCount"?: number;
        /**
          * Id + name attribute for a textarea element.
         */
        "textareaId": string;
        /**
          * Default value for an input element.
         */
        "value": string;
    }
}
declare global {
    interface HTMLGcdsButtonElement extends Components.GcdsButton, HTMLStencilElement {
    }
    var HTMLGcdsButtonElement: {
        prototype: HTMLGcdsButtonElement;
        new (): HTMLGcdsButtonElement;
    };
    interface HTMLGcdsErrorMessageElement extends Components.GcdsErrorMessage, HTMLStencilElement {
    }
    var HTMLGcdsErrorMessageElement: {
        prototype: HTMLGcdsErrorMessageElement;
        new (): HTMLGcdsErrorMessageElement;
    };
    interface HTMLGcdsGridElement extends Components.GcdsGrid, HTMLStencilElement {
    }
    var HTMLGcdsGridElement: {
        prototype: HTMLGcdsGridElement;
        new (): HTMLGcdsGridElement;
    };
    interface HTMLGcdsHintElement extends Components.GcdsHint, HTMLStencilElement {
    }
    var HTMLGcdsHintElement: {
        prototype: HTMLGcdsHintElement;
        new (): HTMLGcdsHintElement;
    };
    interface HTMLGcdsInputElement extends Components.GcdsInput, HTMLStencilElement {
    }
    var HTMLGcdsInputElement: {
        prototype: HTMLGcdsInputElement;
        new (): HTMLGcdsInputElement;
    };
    interface HTMLGcdsLabelElement extends Components.GcdsLabel, HTMLStencilElement {
    }
    var HTMLGcdsLabelElement: {
        prototype: HTMLGcdsLabelElement;
        new (): HTMLGcdsLabelElement;
    };
    interface HTMLGcdsSiteMenuElement extends Components.GcdsSiteMenu, HTMLStencilElement {
    }
    var HTMLGcdsSiteMenuElement: {
        prototype: HTMLGcdsSiteMenuElement;
        new (): HTMLGcdsSiteMenuElement;
    };
    interface HTMLGcdsTextareaElement extends Components.GcdsTextarea, HTMLStencilElement {
    }
    var HTMLGcdsTextareaElement: {
        prototype: HTMLGcdsTextareaElement;
        new (): HTMLGcdsTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "gcds-button": HTMLGcdsButtonElement;
        "gcds-error-message": HTMLGcdsErrorMessageElement;
        "gcds-grid": HTMLGcdsGridElement;
        "gcds-hint": HTMLGcdsHintElement;
        "gcds-input": HTMLGcdsInputElement;
        "gcds-label": HTMLGcdsLabelElement;
        "gcds-site-menu": HTMLGcdsSiteMenuElement;
        "gcds-textarea": HTMLGcdsTextareaElement;
    }
}
declare namespace LocalJSX {
    interface GcdsButton {
        /**
          * Set the main style
         */
        "buttonRole"?: 'primary' | 'secondary' | 'destructive' | 'skip-to-content';
        /**
          * Set the style variant
         */
        "buttonStyle"?: 'solid' | 'outline' | 'text-only';
        /**
          * Set button types
         */
        "buttonType"?: 'submit' | 'reset' | 'button' | 'link';
        /**
          * StyleAPI: custom background color.
         */
        "customBackgroundColor"?: string | undefined;
        /**
          * StyleAPI: custom border color.
         */
        "customBorderColor"?: string | undefined;
        /**
          * StyleAPI: custom border style.
         */
        "customBorderStyle"?: string | undefined;
        /**
          * StyleAPI: custom border weight.
         */
        "customBorderWeight"?: string | undefined;
        /**
          * StyleAPI: custom box shadow.
         */
        "customBoxShadow"?: string | undefined;
        /**
          * StyleAPI: custom btext transform.
         */
        "customCapitalization"?: string | undefined;
        /**
          * StyleAPI: custom display.
         */
        "customDisplay"?: string | undefined;
        /**
          * StyleAPI: custom margin.
         */
        "customMargin"?: string | undefined;
        /**
          * The disabled attribute for a <button> element.
         */
        "disabled"?: boolean;
        /**
          * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
         */
        "download"?: string | undefined;
        /**
          * The href attribute specifies the URL of the page the link goes to
         */
        "href"?: string | undefined;
        /**
          * The name attribute specifies the name for a <button> element.
         */
        "name"?: string | undefined;
        /**
          * Emitted when the button loses focus.
         */
        "onGcdsBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onGcdsFocus"?: (event: CustomEvent<void>) => void;
        /**
          * The rel attribute specifies the relationship between the current document and the linked document
         */
        "rel"?: string | undefined;
        /**
          * The target attribute specifies where to open the linked document
         */
        "target"?: string | undefined;
    }
    interface GcdsErrorMessage {
        /**
          * Error message for an invalid form field.
         */
        "message"?: string;
        /**
          * Id attribute for the error message.
         */
        "messageId"?: string;
    }
    interface GcdsGrid {
        /**
          * If total grid size is less than the size of its grid container, this property aligns the grid along the block (column) axis
         */
        "alignContent"?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
        /**
          * Aligns grid items along the block (column) axis
         */
        "alignItems"?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
        /**
          * Shorthand for column-gap + row-gap Specifies the width of the gutters between columns and rows
         */
        "gap"?: 'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';
        /**
          * Defines grid container size
         */
        "gridContainer"?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs';
        /**
          * Defines element as grid or inline-grid container
         */
        "gridDisplay"?: 'grid' | 'inline-grid';
        /**
          * Set tag for grid container
         */
        "gridTag"?: string;
        /**
          * Defines the columns of the grid Option to set different layouts for desktop | tablet | default
         */
        "gridTemplateColumns"?: string;
        "gridTemplateColumnsDesktop"?: string;
        "gridTemplateColumnsTablet"?: string;
        /**
          * If total grid size is less than the size of its grid container, this property aligns the grid along the inline (row) axis
         */
        "justifyContent"?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
        /**
          * Aligns grid items along the inline (row) axis
         */
        "justifyItems"?: 'center' | 'end' | 'start' | 'stretch';
        /**
          * Sets both the align-content + justify-content properties
         */
        "placeContent"?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';
        /**
          * Sets both the align-items + justify-items properties
         */
        "placeItems"?: 'center' | 'end' | 'start' | 'stretch';
    }
    interface GcdsHint {
        /**
          * Hint displayed below the label and above the input field.
         */
        "hint"?: string;
        /**
          * Id attribute for the hint.
         */
        "hintId"?: string;
    }
    interface GcdsInput {
        /**
          * Specifies if an input element is disabled or not.
         */
        "disabled"?: boolean;
        /**
          * Error message for an invalid input element.
         */
        "errorMessage"?: string;
        /**
          * Specifies if the label is hidden or not.
         */
        "hideLabel"?: boolean;
        /**
          * Hint displayed below the label and above the input field.
         */
        "hint"?: string;
        /**
          * Id + name attribute for an input element.
         */
        "inputId"?: string;
        /**
          * Form field label
         */
        "label"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onGcdsBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Update value based on user input.
         */
        "onGcdsChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onGcdsFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies if a form field is required or not.
         */
        "required"?: boolean;
        /**
          * Size attribute for an input element. Defines max-length as well.
         */
        "size"?: number;
        /**
          * Set Input types
         */
        "type"?: 'email' | 'number' | 'password' | 'search' | 'text' | 'url';
        /**
          * Default value for an input element.
         */
        "value"?: string;
    }
    interface GcdsLabel {
        /**
          * Specifies if the label is hidden or not.
         */
        "hideLabel"?: boolean;
        /**
          * Form field label
         */
        "label"?: string;
        /**
          * Defines the label's for attribute.
         */
        "labelFor"?: string;
        /**
          * Specifies if a form field is required or not.
         */
        "required"?: boolean;
    }
    interface GcdsSiteMenu {
        /**
          * Menu alignment
         */
        "menuAlignment"?: 'left' | 'center' | 'right' | 'split';
        /**
          * Desktop layout
         */
        "menuDesktopLayout": 'topbar' | 'sidebar';
        /**
          * Mobile layout
         */
        "menuMobileLayout": 'drawer';
        /**
          * Sticky navigation flag
         */
        "menuPosition"?: 'static' | 'sticky';
    }
    interface GcdsTextarea {
        /**
          * Defines width for textarea cols (the min-width for textarea's is 50%).
         */
        "cols"?: number;
        /**
          * Specifies if a textarea element is disabled or not.
         */
        "disabled"?: boolean;
        /**
          * Error message for an invalid textarea element.
         */
        "errorMessage"?: string;
        /**
          * Specifies if the label is hidden or not.
         */
        "hideLabel"?: boolean;
        /**
          * Hint displayed below the label and above the textarea field.
         */
        "hint"?: string;
        /**
          * Form field label
         */
        "label"?: string;
        /**
          * Emitted when the textarea loses focus.
         */
        "onGcdsBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Update value based on user input.
         */
        "onGcdsChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the textarea has focus.
         */
        "onGcdsFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies if a form field is required or not.
         */
        "required"?: boolean;
        /**
          * Default value for textarea rows.
         */
        "rows"?: number;
        /**
          * Sets the maxlength attribute for the textarea element.
         */
        "textareaCharacterCount"?: number;
        /**
          * Id + name attribute for a textarea element.
         */
        "textareaId"?: string;
        /**
          * Default value for an input element.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "gcds-button": GcdsButton;
        "gcds-error-message": GcdsErrorMessage;
        "gcds-grid": GcdsGrid;
        "gcds-hint": GcdsHint;
        "gcds-input": GcdsInput;
        "gcds-label": GcdsLabel;
        "gcds-site-menu": GcdsSiteMenu;
        "gcds-textarea": GcdsTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gcds-button": LocalJSX.GcdsButton & JSXBase.HTMLAttributes<HTMLGcdsButtonElement>;
            "gcds-error-message": LocalJSX.GcdsErrorMessage & JSXBase.HTMLAttributes<HTMLGcdsErrorMessageElement>;
            "gcds-grid": LocalJSX.GcdsGrid & JSXBase.HTMLAttributes<HTMLGcdsGridElement>;
            "gcds-hint": LocalJSX.GcdsHint & JSXBase.HTMLAttributes<HTMLGcdsHintElement>;
            "gcds-input": LocalJSX.GcdsInput & JSXBase.HTMLAttributes<HTMLGcdsInputElement>;
            "gcds-label": LocalJSX.GcdsLabel & JSXBase.HTMLAttributes<HTMLGcdsLabelElement>;
            "gcds-site-menu": LocalJSX.GcdsSiteMenu & JSXBase.HTMLAttributes<HTMLGcdsSiteMenuElement>;
            "gcds-textarea": LocalJSX.GcdsTextarea & JSXBase.HTMLAttributes<HTMLGcdsTextareaElement>;
        }
    }
}
