var getMajorVersion = function(version) {
    var majorVersionString = version ? version.split('.')[0] : '4';
    if (!isNaN(majorVersionString)) {
        return parseInt(majorVersionString);
    }
    return 4;
};