export default function Footer(params) {
  return (
    <footer className="footer">
      <div className="container">
        <p
          dangerouslySetInnerHTML={{
            __html: `version 0.1.0`,
          }}
        />
      </div>
    </footer>
  );
}
