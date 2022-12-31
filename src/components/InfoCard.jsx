import React from "react";
import Logo from "./Logo";

const InfoCard = ({ title }) => {
  return (
    <div className="flex flex-col bg-blue-500 dark:bg-blue-700 min-h-full w-2/5 p-20 rounded-lg justify-around">
      <Logo />
      <div className="flex flex-col gap-5">
        <h1 className="text-slate-100 dark:text-slate-200 font-semibold text-6xl">
          {title}
        </h1>
        <p className="text-base text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          mollitia iure provident iusto neque officia qui voluptatibus harum
          perferendis modi, quod, doloremque quibusdam aperiam consequuntur
          nulla similique doloribus ullam voluptatum?
        </p>
      </div>
      <div className="rounded-xl bg-blue-600 p-10 flex flex-col gap-4">
        <q className="text-slate-50 dark:text-slate-200 text-base font-semibold">
          Simply Unbelievable! I am really satisfied with my project and
          business. This is absolutely wonderful!
        </q>
        <div className="flex items-center gap-4">
          <img
            className="rounded-3xl w-20 h-20 object-cover"
            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
            alt="avatar"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-slate-50 font-semibold text-sm">
              Lisandra Martinez
            </h2>
            <p className="text-slate-200 text-sm">Freelancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
