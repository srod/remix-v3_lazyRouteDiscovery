import { AuthRestricted } from "~/components/AuthLayout";

export default function Protected() {
	return (
		<AuthRestricted>
			<div className="flex h-screen items-center justify-center">
				Protected page
			</div>
		</AuthRestricted>
	);
}
