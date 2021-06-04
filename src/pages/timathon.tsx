import React from "react";
import Image from "next/image";

import { Button } from "components/Button";
import Card from "components/Card";

export default function TimathonPage(): JSX.Element {
  return (
    <>
      <div className="font-bold uppercase mt-16 tracking-widest flex">
        <div>
          <div className="text-2xl">timathon</div>
          <div className="text-4xl text-primary">code jam</div>
          <div className="text-2xl text-secondary">every 2 months</div>
          <div className="flex gap-5 mt-3">
            <Button color="secondary">Voting</Button>
            <Button>FAQ</Button>
          </div>
        </div>
        <div className="ml-auto">
          <picture>
            <Image src="/images/timathon/timathon.svg" width={788} height={429} />
          </picture>
        </div>
      </div>
      <div className="uppercase font-bold flex gap-12 m-auto mt-28">
        <Card className="w-56 h-56 pt-3">
          <div className="flex">
            <div className="text-xl tracking-widest text-secondary pt-3 pb-8">Prizes</div>
            <div className="ml-auto">
              <picture>
                <Image src="/images/timathon.prizesCard.svg" width={121} height={121} />
              </picture>
            </div>
          </div>
          <div className="mt-3">You&apos;re in for a chance to win real</div>
          <div className="text-primary">cash prizes</div>
        </Card>
        <Card className="w-56 h-56 pt-3">
          <div className="flex">
            <div className="text-xl tracking-widest text-secondary pt-3 pb-8">Teams</div>
            <div className="ml-auto">
              <picture>
                {/* <img className="w-20" src={teamsCard} alt="" /> */}
                <Image src="/images/timathon/teamsCard.svg" width={106} height={106} />
              </picture>
            </div>
          </div>
          <div className="mt-3">You&apos;re in for a chance to win real</div>
          <div className="text-primary">cash prizes</div>
        </Card>
        <Card className="w-56 h-56 pt-3">
          <div className="flex">
            <div className="text-xl tracking-widest text-secondary pt-3 pb-8">History</div>
            <div className="ml-auto">
              <picture>
                {/* <img className="w-20" src={historyCard} alt="" /> */}
                <Image src="/images/timathon/historyCard.svg" width={67} height={67} />
              </picture>
            </div>
          </div>
          <div className="mt-3">You&apos;re in for a chance to win real</div>
          <div className="text-primary">cash prizes</div>
        </Card>
      </div>
      <div className="font-bold uppercase flex mt-28">
        <div>
          <picture>
            {/* <img className="w-96" src={prizes} alt="prizes" /> */}
            <Image src="/images/timathon/prizes.svg" width={659} height={369} />
          </picture>
        </div>
        <div className="ml-auto">
          <div className="text-4xl text-primary">Prizes</div>
          <div className="text-2xl">Will be split amongst</div>
          <div className="text-2xl">the team members</div>

          <div className="text-sm text-secondary pt-5">*CAD</div>
        </div>
      </div>
      <div className="uppercase font-bold mt-28">
        <div>
          <div className="text-5xl text-primary text-center">teams and timeline</div>
          <div className="flex">
            <div>
              <div className="flex pt-28">
                <div className="text-secondary text-lg">
                  <div className="p-2">week 1</div>
                  <div className="p-2">week 2 & 3</div>
                  <div className="p-2">week 4</div>
                  <div className="p-2">week 5 & 6</div>
                  <div className="p-2">week 7</div>
                </div>

                <div className="h-60 border-l-8 border-primary ml-5 mr-5 rounded" />

                <div className="text-lg">
                  <div className="p-2">create a team and start working on your project</div>
                  <div className="p-2">work on your project</div>
                  <div className="p-2">finish your project and submit it</div>
                  <div className="p-2">vote on your favourite submissions</div>
                  <div className="p-2">winners are announced</div>
                </div>
              </div>
              <Button className="mt-14">Rules & Conditions</Button>
            </div>

            <div className="ml-auto">
              <picture>
                {/* <img className="w-96" src={timeline} alt="timeline" /> */}
                <Image src="/images/timathon/timeline.svg" width={402} height={370} />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="uppercase font-bold mt-28">
        <div className="flex">
          <div className="text-5xl text-primary mt-14">history</div>
          <div className="ml-auto">
            <picture>
              {/* <img className="w-64" src={history} alt="history" /> */}
              <Image src="/images/timathon/history.svg" width={307} height={214} />
            </picture>
          </div>
        </div>
        <div>
          <div className="text-xl flex pt-3">
            <div className="underline mr-5">virtual assistant</div>
            <div className="text-secondary">current jam</div>
          </div>
          <div className="text-sm pt-3">for students</div>
          <div className="text-sm pt-3">generate</div>
        </div>
      </div>
    </>
  );
}
