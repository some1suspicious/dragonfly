// Autogenerated by hob
window.cls || (window.cls = {});
cls.EcmascriptDebugger || (cls.EcmascriptDebugger = {});
cls.EcmascriptDebugger["6.0"] || (cls.EcmascriptDebugger["6.0"] = {});

cls.EcmascriptDebugger["6.0"].ObjectChainList = function(arr)
{
  this.objectChainList = (arr[0] || []).map(function(item)
  {
    return new cls.EcmascriptDebugger["6.0"].ObjectList(item);
  });
};

cls.EcmascriptDebugger["6.0"].ObjectList = function(arr)
{
  this.objectList = (arr[0] || []).map(function(item)
  {
    return new cls.EcmascriptDebugger["6.0"].ObjectInfo(item);
  });
};

cls.EcmascriptDebugger["6.0"].ObjectInfo = function(arr)
{
  this.value = arr[0] ? new cls.EcmascriptDebugger["6.0"].ObjectValue(arr[0]) : null;
  this.propertyList = (arr[1] || []).map(function(item)
  {
    return new cls.EcmascriptDebugger["6.0"].Property(item);
  });
};

cls.EcmascriptDebugger["6.0"].ObjectValue = function(arr)
{
  this.objectID = arr[0];
  this.isCallable = arr[1];
  /** 
    * type, function or object
    */
  this.type = arr[2];
  this.prototypeID = arr[3];
  /** 
    * The class of the object.
    */
  this.className = arr[4];
  /** 
    * If the object is a function, this is the name of
    * the variable associated with that function (if any).
    */
  this.functionName = arr[5];
};

/** 
  * If `type` is ... then ... is present:
  *   "object", `objectValue`
  *   "number", `value`
  *   "string", `value`
  *   "boolean", `value` (`"true"` or `"false"`)
  * Otherwise (`"undefined"` or `"null"`), only `type` is present.
  */
cls.EcmascriptDebugger["6.0"].Property = function(arr)
{
  this.name = arr[0];
  /** 
    * One of:
    * - `"number"`
    * - `"boolean"`
    * - `"string"`
    * - `"null"`
    * - `"undefined"`
    * - `"object"`
    */
  this.type = arr[1];
  /** 
    * Only present for `"number"`, `"string"` or `"boolean"`
    */
  this.value = arr[2];
  /** 
    * Only present for `"object"`
    */
  this.objectValue = arr[3] ? new cls.EcmascriptDebugger["6.0"].ObjectValue(arr[3]) : null;
};

