/* AdSlot — ad network integration placeholder.
   Currently returns null (no ads shown).
   To re-enable: uncomment the div below and paste your ad network script inside it. */

// const AD_SIZES = {
//   banner: { label: 'AD SLOT', height: 'h-24', sublabel: 'Banner Ad (728×90)' },
//   interstitial: { label: 'AD SLOT — INTERSTITIAL', height: 'h-48', sublabel: 'Interstitial Ad (320×480)' },
//   inContent: { label: 'AD SLOT — IN-CONTENT', height: 'h-28', sublabel: 'In-Content Ad (300×250)' },
//   bottom: { label: 'AD SLOT — BOTTOM', height: 'h-24', sublabel: 'Bottom Ad (728×90)' },
// }

export default function AdSlot({ type = 'banner', className = '' }) {
  return null

  // ── Re-enable when approved by an ad network ───────────────────────────────
  // const { label, height, sublabel } = AD_SIZES[type] ?? AD_SIZES.banner
  // return (
  //   <div
  //     className={`w-full ${height} flex flex-col items-center justify-center border border-dashed rounded-md ${className}`}
  //     style={{ borderColor: '#2a2a35', backgroundColor: 'rgba(22,22,31,0.6)' }}
  //   >
  //     <span className="font-ui text-xs tracking-widest uppercase mb-1" style={{ color: '#4a4a58' }}>
  //       {label}
  //     </span>
  //     <span className="font-ui text-xs" style={{ color: '#333340' }}>
  //       {sublabel}
  //     </span>
  //   </div>
  // )
}
