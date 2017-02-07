var _ = require('underscore');

exports.validateFields = function(data, fields) {
    var response = false;
    var missingFields = []
    _.each(fields, function(field){
        if(!(_.has(data, field)))
            missingFields.push(field);
    });
    if(missingFields.length > 0)
        response = missingFields.join() + " Field(s) are required"
    return response;
};
exports.dataCleanUp = function(data, fields) {
    return _.omit(data, fields);
};
exports.mergeData = function(arr1, arr2) {
    return _.extend(arr1, arr2);
};