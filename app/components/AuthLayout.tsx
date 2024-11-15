import { useNavigate } from "@remix-run/react";
import { type PropsWithChildren, useEffect, useState } from "react";

/**
 * Simple wrapper that limit the access to the subpage depending on the authentication status
 * @param children
 * @constructor
 */
export function AuthRestricted({ children }: PropsWithChildren) {
	const navigate = useNavigate();
	const [canDisplay, setCanDisplay] = useState(false);

	useEffect(() => {
		const session = undefined;

		if (!session) {
			console.log("Redirecting to registration");
			navigate("/login", { replace: true });
			return;
		}

		if (session) {
			console.log("Redirecting to protected");
			navigate("/protected", { replace: true });
			return;
		}

		setCanDisplay(true);
	}, [navigate]);

	if (canDisplay) {
		return children;
	}

	return null;
}
