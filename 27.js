const matrix = struct.map(a => ({
  ...a,
  delta: Math.abs(a.value - raw[0]),
  knot: a.degree % 120 === 0
}));
