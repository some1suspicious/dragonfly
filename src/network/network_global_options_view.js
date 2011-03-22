﻿window.cls = window.cls || {};

/**
 * @constructor
 * @extends ViewBase
 */
cls.NetworkOptionsView = function(id, name, container_class, html, default_handler) {
  this._cache_policy = "default";
  this._bypass_cache = false;
  this._track_bodies = false;
  this._service = window.services["resource-manager"];
  this._overrides = false;
  this._headers = [{name: "Header-name", value: "Header-value"}];
  this._headerele = null;

  this.createView = function(container)
  {
    this._render_main_view(container);
  };

  this._render_main_view = function(container)
  {
    var headers = [{name:"foo", value:"bar"}];
    container.clearAndRender(templates.network_options_main(this._bypass_cache,
                                                            this._track_bodies,
                                                            this._headers,
                                                            this._overrides));
    this._output = container.querySelector("code");
    this._headerele = container.querySelector(".header-override-input");

  };

  /**
   * Make sure there is always one blank entry for adding stuff
   */
  this._update_header_table = function()
  {
    var rows = this._headertable.querySelectorAll("tr");
    var emptyrows = [];
    for (var n=1, row; row=this._headertable[n]; n++)
    {
        if (!row.childNodes[0].textContent.trim() &&
            !row.childNodes[1].textContent.trim())
          {
            emptyrows.push(row);
          }
    }
  };

  this._handle_toggle_caching_bound = function(evt, target)
  {
    this._bypass_cache = target.checked;
    const DEFAULT = 1,  NO_CACHE = 2;
    this._service.requestSetReloadPolicy(null, [this._bypass_cache ? NO_CACHE : DEFAULT]);
  }.bind(this);

  this._handle_toggle_content_tracking_bound = function(evt, target)
  {
    const OFF = 4, DATA_URI = 3, STRING = 1, DECODE = 1;
    this._track_bodies = target.checked;

    if (this._track_bodies)
    {
      var arg = [[DATA_URI, DECODE],
                 [ "text/html", "application/xhtml+xml", "application/mathml+xml",
                   "application/xslt+xml", "text/xsl", "application/xml",
                   "text/css", "text/plain", "application/x-javascript",
                   "application/javascript", "text/javascript"
                 ].map(function(e) { return [e, [STRING, DECODE]] })
                ];
    }
    else
    {
      var arg = [[OFF]];
    }
    this._service.requestSetRequestMode(null, arg);
    this._service.requestSetResponseMode(null, arg);
  }.bind(this);

  this._handle_toggle_header_overrides_bound = function(evt, target)
  {
    this._overrides = target.checked;
    if (this._overrides)
    {
      this._set_header_overrides(this._headers);
    }
    else
    {
      this._clear_header_overrides();
    }
    this.update();
  }.bind(this);

  this._get_headers = function()
  {
    var raw = this._headerele ? this._headerele.value : "";
    return raw.split("\n").map(function(e) {
      var parts = e.split(": ");
      if (parts.length != 2) { return null }
      return {name: parts[0], value: parts[1].trim()};
    }).filter(Boolean);
  }

  this._handle_update_header_overrides_bound = function(evt, target)
  {
    var headers = this._get_headers();
    this._headers = headers;
    this._set_header_overrides(headers);
  }.bind(this);

  this._handle_select_preset_bound = function(evt, target)
  {
    this._headerele.value = target.value;
    this._headerele.releaseEvent('input');
  }.bind(this);

  this._clear_header_overrides = function()
  {
    this._service.requestClearHeaderOverrides(null, []);
  }

  this._set_header_overrides = function(headers)
  {
    this._clear_header_overrides();
    var args = [headers.map(function(e) {return [e.name, e.value] })];
    this._service.requestAddHeaderOverrides(null, args);
  }

  var eh = window.eventHandlers;
  eh.change["network-options-toggle-caching"] = this._handle_toggle_caching_bound;
  eh.change["network-options-toggle-body-tracking"] = this._handle_toggle_content_tracking_bound;
  eh.change["toggle-header-overrides"] = this._handle_toggle_header_overrides_bound;
  eh.change["network-options-select-preset"] = this._handle_select_preset_bound;


  eh.click["update-header-overrides"] = this._handle_update_header_overrides_bound;


  this.init(id, name, container_class, html, default_handler);
};
cls.NetworkOptionsView.prototype = ViewBase;