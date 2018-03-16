import moment from "moment";

function _getDurationValue(d, part = 'max') {
  // checks for 1-2 units of time and chooses min/max amount
  if (!["min", "max"].includes(part)) {
    throw Error(`Unknown duration part \`${part}\``);
  }

  const durationValue = {};

  for (var unit in d) {
    const split = d[unit].toString().split("-");
    const idx = part === "min" ? 0 : split.length - 1;
    durationValue[unit] = split[idx];
  }

  return durationValue;
}

function getMaxDuration(d) {
  return _getDurationValue(d, "max");
}

function getMinDuration(d) {
  return _getDurationValue(d, "min");
}

function momentDuration(d) {
  return moment.duration(d);
}

function sumMomentDurations(acc, md) {
  return acc.add(md);
}

function _isRangeDuration(d) {
  let rangeDuration = false;

  for (var unit in d) {
    const split = d[unit].toString().split("-");
    if (split.length > 1) {
      rangeDuration = true;
      break;
    }
  }

  return rangeDuration;
}

// h: a few seconds | 2 minutes
function _getHumanizedDurationUnit(h) {
  const split = h.split(" ");
  return split[split.length - 1];
}

function _avoidFuzzyHumanDuration(d) {
  const humanized = moment.duration(d).humanize();

  if (humanized.startsWith("a")) {
    const unit = _getHumanizedDurationUnit(humanized);
    return (d[unit] || d[unit + "s"]) + " " + unit;
  }

  return humanized;
}

// supports { mminutes: '1-2' } type ranges for reading moment durations
function _humanizeDurationRange(d) {
  // this assumes homogenous units // e.g. no half units like { minutes: 1, seconds: 30 }
  let min = getMinDuration(d);
  let max = getMaxDuration(d);
  const unit = _getHumanizedDurationUnit(_avoidFuzzyHumanDuration(max));

  return (
    [min, max]
    .reduce((acc, c) => {
      return acc.concat(_avoidFuzzyHumanDuration(c).split(" ")[0]);
    }, [])
    .join('-') + ` ${unit}`
  );
}

function humanizeDuration(d) {
  if (_isRangeDuration(d)) {
    return _humanizeDurationRange(d);
  }

  return _avoidFuzzyHumanDuration(d);
}

function humanize(s) {
  return _avoidFuzzyHumanDuration(s);
}

export default {
  methods: {
    getMaxDuration,
    getMinDuration,
    momentDuration,
    sumMomentDurations,
    humanizeDuration,
    humanize
  }
}
