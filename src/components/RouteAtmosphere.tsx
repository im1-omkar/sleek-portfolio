type RouteAtmosphereProps = {
  variant: "stars" | "rain";
};

export default function RouteAtmosphere({ variant }: RouteAtmosphereProps) {
  return <div aria-hidden="true" className={`route-atmosphere route-atmosphere--${variant}`} />;
}
