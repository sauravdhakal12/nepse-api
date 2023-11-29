dataSegment = [
  0x05, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00,
  0x07, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00,
  0x06, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00,
  0x05, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00,
  0x03, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00,
  0x04, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00,
  0x06, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00,
  0x06, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00,
  0x05, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00,
  0x09, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00,
  0x08, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00,
  0x04, 0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00,
  0x04, 0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00,
  0x09,
]


const cdx = (w2c_p0, w2c_p1, w2c_p2, w2c_p3, w2c_p4) => {
  let w2c_i0 = w2c_p1
  let w2c_i1 = 10
  w2c_i0 = Math.floor(w2c_i0 / w2c_i1);
  w2c_p0 = w2c_i0
  w2c_i1 = 10
  w2c_i0 = w2c_i0 % w2c_i1
  w2c_i1 = w2c_p1
  let w2c_i2 = w2c_p0
  let w2c_i3 = 10
  w2c_i2 *= w2c_i3
  w2c_i1 -= w2c_i2
  w2c_i0 += w2c_i1
  w2c_i1 = w2c_p1
  w2c_i2 = 100
  w2c_i1 = Math.floor(w2c_i1 / w2c_i2);
  w2c_i2 = 10
  w2c_i1 = w2c_i1 % w2c_i2
  w2c_i0 += w2c_i1
  w2c_i1 = 2
  w2c_i0 <<= (w2c_i1 & 31)

  w2c_i0 = dataSegment[w2c_i0]
  w2c_i1 = 22
  w2c_i0 += w2c_i1

  return w2c_i0
};


const rdx = (w2c_p0, w2c_p1, w2c_p2, w2c_p3, w2c_p4) => {
  let w2c_i0 = w2c_p1
  let w2c_i1 = 100
  w2c_i0 = Math.floor(w2c_i0 / w2c_i1);
  w2c_i1 = 10
  w2c_i0 = w2c_i0 % w2c_i1
  w2c_i1 = w2c_p1
  let w2c_i2 = 10
  w2c_i1 = Math.floor(w2c_i1 / w2c_i2);
  w2c_p0 = w2c_i1
  w2c_i2 = 10
  w2c_i1 = w2c_i1 % w2c_i2
  w2c_i0 += w2c_i1
  w2c_p2 = w2c_i0
  w2c_i1 = w2c_p2
  w2c_i2 = w2c_p1
  let w2c_i3 = w2c_p0
  let w2c_i4 = 10
  w2c_i3 *= w2c_i4
  w2c_i2 -= w2c_i3
  w2c_i1 += w2c_i2
  w2c_i2 = 2
  w2c_i1 <<= (w2c_i2 & 31)

  w2c_i1 = dataSegment[w2c_i1]
  w2c_i0 += w2c_i1
  w2c_i1 = 32
  w2c_i0 += w2c_i1

  return w2c_i0
};

const bdx = (w2c_p0, w2c_p1, w2c_p2, w2c_p3, w2c_p4) => {
  let w2c_i0 = w2c_p1
  let w2c_i1 = 100
  w2c_i0 = Math.floor(w2c_i0 / w2c_i1);
  w2c_i1 = 10
  w2c_i0 = w2c_i0 % w2c_i1
  w2c_i1 = w2c_p1
  let w2c_i2 = 10
  w2c_i1 = Math.floor(w2c_i1 / w2c_i2);
  w2c_p0 = w2c_i1
  w2c_i2 = 10
  w2c_i1 = w2c_i1 % w2c_i2
  w2c_i0 += w2c_i1
  w2c_p2 = w2c_i0
  w2c_i1 = w2c_p2
  w2c_i2 = w2c_p1
  let w2c_i3 = w2c_p0
  let w2c_i4 = 10
  w2c_i3 *= w2c_i4
  w2c_i2 -= w2c_i3
  w2c_i1 += w2c_i2
  w2c_i2 = 2
  w2c_i1 <<= (w2c_i2 & 31)

  w2c_i1 = dataSegment[w2c_i1]
  w2c_i0 += w2c_i1
  w2c_i1 = 60
  w2c_i0 += w2c_i1

  return w2c_i0
};

const ndx = (w2c_p0, w2c_p1, w2c_p2, w2c_p3, w2c_p4) => {
  let w2c_i0 = w2c_p1
  let w2c_i1 = 10
  w2c_i0 = Math.floor(w2c_i0 / w2c_i1);
  w2c_p0 = w2c_i0
  w2c_i1 = 10
  w2c_i0 = w2c_i0 % w2c_i1
  w2c_p2 = w2c_i0
  w2c_i1 = w2c_p2
  let w2c_i2 = w2c_p1
  let w2c_i3 = w2c_p0
  let w2c_i4 = 10
  w2c_i3 *= w2c_i4
  w2c_i2 -= w2c_i3
  w2c_i1 += w2c_i2
  w2c_i2 = w2c_p1
  w2c_i3 = 100
  w2c_i2 = Math.floor(w2c_i2 / w2c_i3);
  w2c_i3 = 10
  w2c_i2 = w2c_i2 % w2c_i3
  w2c_i1 += w2c_i2
  w2c_i2 = 2
  w2c_i1 <<= (w2c_i2 & 31)

  w2c_i1 = dataSegment[w2c_i1]
  w2c_i0 += w2c_i1
  w2c_i1 = 88
  w2c_i0 += w2c_i1

  return w2c_i0
};

const mdx = (w2c_p0, w2c_p1, w2c_p2, w2c_p3, w2c_p4) => {
  let w2c_i0 = w2c_p1
  let w2c_i1 = 100
  w2c_i0 = Math.floor(w2c_i0 / w2c_i1);
  w2c_i1 = 10
  w2c_i0 = w2c_i0 % w2c_i1
  w2c_p0 = w2c_i0
  w2c_i1 = w2c_p0
  let w2c_i2 = w2c_p1
  let w2c_i3 = 10
  w2c_i2 = Math.floor(w2c_i2 / w2c_i3);
  w2c_p2 = w2c_i2
  w2c_i3 = 10
  w2c_i2 = w2c_i2 % w2c_i3
  w2c_i3 = w2c_p1
  let w2c_i4 = w2c_p2
  let w2c_i5 = 10
  w2c_i4 *= w2c_i5
  w2c_i3 -= w2c_i4
  w2c_i2 += w2c_i3
  w2c_i1 += w2c_i2
  w2c_i2 = 2
  w2c_i1 <<= (w2c_i2 & 31)

  w2c_i1 = dataSegment[w2c_i1]
  w2c_i0 += w2c_i1
  w2c_i1 = 110
  w2c_i0 += w2c_i1

  return w2c_i0
};

module.exports = {
  cdx,
  rdx,
  bdx,
  ndx,
  mdx
};