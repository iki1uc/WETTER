const kanal = raum.map(a => ({
  ...a,
  channel: a.value * 3,
  flow: a.delta * 9
}));
