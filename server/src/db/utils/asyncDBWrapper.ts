export const asyncDBWrapper = async <T>(queryFn: () => Promise<T>) => {
	let error: Error | null = null;
	let data: T | null = null;
	try {
		data = await queryFn();
	} catch (err) {
		error = err as Error;
	}
	return { data, error };
};
