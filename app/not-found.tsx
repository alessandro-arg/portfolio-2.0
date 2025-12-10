export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
        }}
      >
        404
      </h1>
      <p>Sorry, we couldn&apos;t find that page.</p>
    </main>
  );
}
