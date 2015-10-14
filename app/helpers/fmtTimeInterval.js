//
// convert a nanosecond time interval into a s.ns representation.
// 1100000000 becomes 1.1s
//
export default function(value, decimals, step) {
    decimals = (decimals === undefined ? 2 : decimals);
    step = (step === undefined ? 2 : step);

    var units = ['ns', 'us', 'ms', 's', 'min', 'h', 'd'];
    var absValue = Math.abs(value);
    var multipliers = [1000, 1000, 1000, 60, 60, 24];
    var multiplier = 1;
    var i;
    for (i = 0; i < units.length; i++) {
        if (absValue < multiplier * step * multipliers[i]) {
            break;
        } else if (i < units.length - 1) {
            multiplier = multiplier * multipliers[i];
        }
    }
    i = (i < units.length ? i : units.length - 1);

    var convertedValue = (value / multiplier).toFixed(decimals);
    var unit = units[i];

    return {
        value: convertedValue,
        unit: unit,
        output: convertedValue + ' ' + unit
    };
}
