import Script from "next/script";

export default function Chatbot() {
  return (
    <div>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      {/* @ts-ignore */}
      <df-messenger
        intent="WELCOME"
        chat-title="Talk to Me! 💯"
        agent-id="9b62dd6b-81fd-497c-b24e-88619a54cae2"
        language-code="en"
      >
        {/* @ts-ignore */}
      </df-messenger>
    </div>
  );
}

{
  /* <style>
df-messenger {
  --df-messenger-bot-icon: #2c2a2ae5;
  --df-messenger-bot-message: #181515;
  --df-messenger-button-titlebar-color: #000000;
  --df-messenger-button-titlebar-font-color: rgb(255, 255, 255);
  --df-messenger-chat-background-color: #ffffff;
  --df-messenger-font-color: rgb(255, 255, 255);
  --df-messenger-send-icon: #92b7fe;
  --df-messenger-user-message: #1704ca;
  --df-messenger-input-box-color: #edf7fc;
  --df-messenger-input-box-size: 100px;
}
</style> */
}
