interface SpotifyEmbedProps {
  url: string;
}

function getSpotifyEmbedUrl(url: string): string | null {
  // Handles URLs like:
  // https://open.spotify.com/episode/4rOoJ6Egrf8K2IrywzwOMk
  // https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh
  // https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
  const match = url.match(
    /open\.spotify\.com\/(track|album|playlist|episode|show)\/([a-zA-Z0-9]+)/
  );

  if (!match) return null;

  const [, type, id] = match;
  return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
}

export default function SpotifyEmbed({ url }: SpotifyEmbedProps) {
  const embedUrl = getSpotifyEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div className="spotify-embed">
      <iframe
        src={embedUrl}
        width="100%"
        height="232"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
        title="Spotify player"
      />
    </div>
  );
}
