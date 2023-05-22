"use client";
import Form from '@components/Form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function CreatePrompt() {
const [submitting, setSubmitting] = useState(false);
const [post, setPost] = useState({
    prompt: "",
    tag: ""
});

const create = async () =>{
     
}
return (
<Form 

/>
  )
}

export default CreatePrompt