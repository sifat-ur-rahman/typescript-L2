"use strict";
var _a, _b;
{
    const user = {
        name: 'sifat',
        address: {
            city: 'khulna',
            road: '27 RN ',
        }
    };
    const newAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.presentAddress) !== null && _b !== void 0 ? _b : 'No present Address';
    console.log({ newAddress });
    //
}
