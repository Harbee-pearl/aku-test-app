"use client";
import EmptyTxnhistoryImg from "@/assets/images/transaction-history.png";
import Spinner from "@/components/ui/spinner";
import { SearchService } from "@/services/search";
import { QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

function ListItem({ userInfo }: any) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="">
        <div className="mb-5">
          <Image
            src={userInfo.avatar_url}
            width={60}
            height={60}
            alt="user-avatar"
            className="size-12 rounded-full"
          />
        </div>
        <a href={userInfo.html_url} target="_blank" rel="no-referrwer">
          <p className="text-sm text-primary font-medium">{userInfo.login}</p>
        </a>
      </div>
      <div className="">
        <div className="text-end">
          <label className="text-xs text-gray-400">Account type</label>
          <p className="text-gray-500">{userInfo.type}</p>
        </div>
      </div>
    </div>
  );
}
function SearchResult() {
  const queryClient = new QueryClient();
  const { query } = useParams<{ query: string }>();
  const type = localStorage.getItem("userType") ?? "user";
  // console.log(query, type);

  const {
    data: users,
    isPending,
    error,
  } = useQuery({
    queryFn: () => SearchService.searchGithubUsers(query, type),
    queryKey: ["search-users", query, type],
  });

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({
        queryKey: ["search-users"],
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, type]);

  return (
    <div className="w-full max-w-2xl">
      <Link href="/" className="text-primary hover:text-primary/80 mb-4 block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 inline mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </Link>
      <div className="bg-white shadow-md text-gray-500 rounded-lg p-6 w-full  min-h-40">
        <div className="my-12">
          {isPending ? (
            <div className="w-full h-full flex items-center justify-center">
              <Spinner color="primary" size="xl" />
            </div>
          ) : Array.isArray(users) && users.length > 0 ? (
            <ul className="space-y-5">
              {users.map((item) => (
                <li key={item.id}>
                  <ListItem userInfo={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center h-full w-full  my-12">
              <div className="text-center w-full max-w-sm mx-auto">
                <Image
                  src={EmptyTxnhistoryImg}
                  alt=""
                  className="w-[80%] max-w-[72px] mx-auto mb-4"
                />
                <p className="text-text-body">
                  No data found for &quot;{query}&quot;.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
