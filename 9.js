const struct = raw.map((v,i)=>({
  value:v,
  degree:i*40,
  percent:(v/raw[last])*100
}));
