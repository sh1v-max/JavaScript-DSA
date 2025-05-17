var TimeLimitedCache = function() {
  this.Cache=new Map();
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let res=false;
    if(this.Cache.has(key))
    {
       const ref=this.Cache.get(key).ref;
       clearTimeout(ref);
       res=true;
    }
     const ref=setTimeout(()=>{
       this.Cache.delete(key);
       },duration);
       this.Cache.set(key,{
             value:value,
             ref:ref
       });
    return res;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/

TimeLimitedCache.prototype.get = function(key) {
  if(this.Cache.has(key))
  {
     return this.Cache.get(key).value;  
  }
  return -1;
};

/** 
* @return {number} count of non-expired keys
*/

TimeLimitedCache.prototype.count = function() {
  return this.Cache.size;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/