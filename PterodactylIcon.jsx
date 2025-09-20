export default function PterodactylIcon({ width = 64, height = 64 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
    >
      <g fill="#28a745">
        <path d="M32 2c-2 4-6 12-6 20s4 16 6 20c2-4 6-12 6-20s-4-16-6-20z" />
        <path d="M32 22c-4 0-12 2-16 6s-6 12-6 16c4-2 12-6 16-6s12 4 16 6c0-4-2-12-6-16s-12-6-16-6z" />
      </g>
    </svg>
  );
}
