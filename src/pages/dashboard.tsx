import { FC, FormEvent, useState } from "react";
import ComplexNavbar from "../components/ComplexNavbar.tsx/ComplexNavbar";
import { HeroMovie } from "../components/HeroMovie/HeroMovie";

interface IDashboard { }

export const Dashboard: FC<IDashboard> = () => {
    return (
        <div className="px-3 grid gap-4">
            <ComplexNavbar />
            <HeroMovie />
        </div>
    );
};