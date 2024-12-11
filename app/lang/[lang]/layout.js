export default async function Layout({ children, params }) {
  const lang = (await params).lang;

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="font-work-sans ">
      {children}
    </main>
  );
}
