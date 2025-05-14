import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array.from({ length: 8 });

  return (
    <aside
      className="h-full w-20 lg:w-72 border-r border-base-300 
      flex flex-col bg-base-100 transition-all duration-200"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full p-4">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-gray-500" />
          <span className="font-semibold text-gray-700 hidden lg:block">
            Contacts
          </span>
        </div>
      </div>

      {/* Skeleton List */}
      <div className="overflow-y-auto py-4 space-y-4 px-3">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 animate-pulse px-1 py-2 rounded-md hover:bg-base-200 transition"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-neutral-700 shadow-sm" />

            {/* Text info (only on large screens) */}
            <div className="hidden lg:flex flex-col gap-2">
              <div className="h-4 w-32 bg-gray-300 dark:bg-neutral-700 rounded-md" />
              <div className="h-3 w-20 bg-gray-200 dark:bg-neutral-600 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
