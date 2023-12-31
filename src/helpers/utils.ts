export const getPaginationParams = (args: any) => {
  let page = args.page || 0,
    limit = args.limit || 100;
  const skip = page ? page * limit - limit : 0;
  const sortBy = args.sortBy;
  const sortOrder =
    args.sortOrder == "asc" ? 1 : args.sortOrder == "desc" ? -1 : 1;
  return { skip, limit, page, sortBy, sortOrder };
};
