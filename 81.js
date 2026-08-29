const raum = matrix.map(a => ({
  ...a,
  room: a.degree >= 80 && a.degree <= 120,
  station: a.degree === 80
}));

