// Autogenerated by hob
window.cls || (window.cls = {});
cls.ResourceManager || (cls.ResourceManager = {});
cls.ResourceManager["1.0"] || (cls.ResourceManager["1.0"] = {});

cls.ResourceManager["1.0"].UrlLoad = function(arr, parent)
{
  this.parent = parent || null;
  this.windowID = arr[0];
  this.frameID = arr[1];
  this.documentID = arr[2];
  this.resourceID = arr[3];
  /** 
    * The URL which which is about to be loaded.
    */
  this.url = arr[4];
  /** 
    * The type of URL that was started, this can referer to a specific protocol
    * or a special URL type.
    * 
    * @note More types may be added in the future, make sure the client supports that.
    */
  // cls.ResourceManager["1.0"].UrlLoad.URLType
  this.urlType = arr[5];
  this.time = arr[6];
  this.toString = function() { return "[message UrlLoad]"; }
};
cls.ResourceManager["1.0"].UrlLoad.URLType =
{
  /** 
    * Type not known, should not occur.
    */
  0: "UNKNOWN",
  /** 
    * HTTP protocol.
    */
  1: "HTTP",
  /** 
    * HTTP protocol with SSL.
    */
  2: "HTTPS",
  /** 
    * Local file access.
    */
  3: "FILE",
  /** 
    * Data URIs, e.g data:text/plain,mydata
    */
  4: "DATA",
  5: "FTP",
  6: "GOPHER",
  7: "WAIS",
  8: "NEWS",
  9: "SNEWS",
  10: "NEWSATTACHMENT",
  11: "SNEWSATTACHMENT",
  12: "EMAIL",
  13: "ATTACHMENT",
  14: "TELNET",
  15: "MAILTO",
  16: "OPERA",
  17: "JAVASCRIPT",
  18: "CONTENT_ID",
  19: "TN3270",
  21: "SOURCE",
  22: "CLIENT",
  23: "NNTP",
  25: "NNTPS",
  26: "SHARE",
  27: "GHTTP",
  28: "TV",
  29: "EDITED",
  30: "ERROR",
  31: "DVB",
  32: "TEL",
  33: "MAIL",
  34: "IRC",
  35: "SMS",
  36: "SMSTO",
  39: "CHAT_TRANSFER",
  40: "DEVICE",
  41: "MOUNTPOINT",
  42: "WIDGET",
  43: "OBMLSERVER",
  44: "UNITE",
  100: "INTERNAL",
};

