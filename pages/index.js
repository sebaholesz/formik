import NewsletterForm from "../components/NewsletterForm/NewsletterForm";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "1.5rem", borderRadius: '15px', boxShadow: '0 5px 30px #f291c3b0'}}>
        <NewsletterForm />
      </div>
    </div>
  );
}
