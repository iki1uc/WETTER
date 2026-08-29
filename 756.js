const uberraum = kanal.map(a => ({
  ...a,
  hyper: a.value * 9,
  vector: a.degree * 9,
  fusion: a.percent + a.delta
}));
