import Script from "next/script";

export default function Chatbot() {
  return (
    <div>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      {/* @ts-ignore */}
      <df-messenger
        intent="WELCOME"
        chat-title="Talk to Me! 💯"
        agent-id={"9b62dd6b-81fd-497c-b24e-88619a54cae2"}
        language-code="en"
      >
        {/* @ts-ignore */}
      </df-messenger>
    </div>
  );
}
