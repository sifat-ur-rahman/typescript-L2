"use strict";
{
    // nullish Coalescing Operator  --- ??
    //null / undefined ---> diction making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Gust';
    console.log({ result1 });
}
