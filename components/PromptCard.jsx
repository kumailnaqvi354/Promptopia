"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PromptCard = ({ post, handleaTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image
            src={post.creator.image}
            alt="image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
