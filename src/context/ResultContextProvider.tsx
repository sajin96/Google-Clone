import React, {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface ContextInterface {
	getResults: (data: string) => void;
	results: object | any;
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
	isLoading: boolean;
}

export const ResultContext = createContext<ContextInterface>({
	getResults: () => {},
	results: [],
	searchTerm: "",
	setSearchTerm: () => {},
	isLoading: false,
});
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

interface Props {
	children: ReactNode;
}