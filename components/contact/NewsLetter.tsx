import { sql } from "@vercel/postgres";

export default function NewsLetterForm() {
  const subscribe = async (formData: FormData) => {
    "use server";

    const res = await sql`
		INSERT INTO newsletter (email, message)
		VALUES (${formData.get("newsLetter")},${formData.get("message")})
	`;
    console.log("🚀 ~ subscribe ~ rows:", res);

    // toast('Subscribed, Keep an eye on Email')
    //   redirect(`/product/${rows[0].slug}`);
  };

  return (
    <form action={subscribe} className="text-accent ml:p-8 lg:p-1">
      <label className="text-2xl font-semibold" htmlFor="newsLetter">
        Newsletter
      </label>
      <div className="relative z-10 mt-6 flex items-center ">
        <input
          className={`h-16 w-full flex-1 rounded-tl-lg border-0 p-3 text-2xl text-gray-800 outline-none ring-1  ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent dark:bg-lightestNavy dark:text-gray-100 dark:ring-gray-600 sm:leading-6 ml:p-4`}
          type="email"
          name="newsLetter"
          autoComplete="email"
          required
          placeholder="Your Email here"
        />
        <button
          className="h-16 rounded-tr-lg bg-accent px-2 text-base font-semibold text-slate-50 hover:opacity-80 active:bg-accentLow  ml:px-6 ml:text-lg"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <textarea
        className="relative z-10 mb-6 h-56 w-full flex-1 rounded-b-lg border-0 p-3 text-2xl text-gray-800 shadow-2xl outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent dark:bg-lightestNavy dark:text-gray-100 dark:ring-gray-600 sm:leading-6 ml:p-4"
        name="message"
        id="formMsg"
        placeholder="Your Message"
        cols={50}
      ></textarea>
    </form>
  );
}
