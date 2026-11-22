// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in lib/units.css:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class that lib/units.css animates (swap-a,
// hop, orbit, ride, spin, tilt, breathe, ...), or add your own .seen .unit-art .NAME rule and keyframes in a <style> in index.html.
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 第 2 章 因數與倍數: the factor tree of 60, the leaves breathe
    reset(Tx(400, 40, '60', 28, '', 'middle') + P('M390 50L320 92') + P('M410 50L480 92') +
      Tx(315, 115, '6', 26, '', 'middle') + Tx(485, 115, '10', 26, '', 'middle') +
      P('M308 122L275 152', 'a') + P('M322 122L355 152', 'a') + P('M475 122L445 152', 'a') + P('M495 122L525 152', 'a') +
      ['2', '3', '2', '5'].map((v, i) => Tx([270, 360, 440, 530][i], 175, v, 24, 'breathe', 'middle')).join('') +
      Tx(560, 60, '(84, 126) = 42', 20, 'faint', 'end')),
  ];
})();
