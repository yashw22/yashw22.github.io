import { CardBody, CardContainer, CardItem } from "../components/Card3D";
import { HoverEffect } from "../components/ItemsHoverEffect";

const projects = [{ text: "Stripe" }, { text: "Netflix" }, { text: "Google" }];

export default function InternshipPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect
          items={projects}
          className=""
          cardContainerClass="relative  block p-2 h-full w-full group"
          hoverClass="absolute inset-0 h-full w-full block rounded-3xl bg-black"
          cardClass="clickable bg-white dark:bg-black rounded-2xl p-4 overflow-hidden group-hover:border-slate-700 relative z-20"
          textClass="font-bold tracking-wide"
        />
      </div>

      <CardContainer>
        <CardBody className="clickable bg-white relative group/card sm:w-[30rem] h-auto w-auto p-10 rounded-xl">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={"a"}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
