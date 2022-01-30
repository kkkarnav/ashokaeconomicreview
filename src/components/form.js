import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Email" className="form_field" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="submit" className="button"/>
		</form>
	);
}
