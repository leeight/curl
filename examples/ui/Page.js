/***************************************************************************
 *
 * Copyright (c) 2011 Baidu.com, Inc. All Rights Reserved
 * $Id: Page.js 2737 2011-03-08 07:33:37Z yuanhongliang $
 *
 **************************************************************************/



/**
 * ui/Page.js ~ 2011/02/16 18:57:04
 * @author yuanhongliang
 * @version $Revision: 2737 $
 * @description
 * ui控件的基类
 **/

goog.require('ui.Control');

goog.provide('ui.Page');



/**
 * ui.Page
 * @constructor
 * @extends {ui.Control}
 * @param {Object} options 控件初始化参数.
 * @export
 */
ui.Page = function(options) {
  ui.Control.call(this, options);
};

/**
* @inheritDoc
*/
ui.Page.prototype.dispose = function() {
    ui.Page.superClass.dispose.call(this);
    this.ondispose();
};

/**
 * 在销毁时的接口.
 * @type {Function}
 */
ui.Page.prototype.ondispose = baidu.fn.blank;

baidu.inherits(ui.Page, ui.Control);
