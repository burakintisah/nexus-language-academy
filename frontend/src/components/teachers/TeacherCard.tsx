import Card from "@/components/ui/Card";

interface Teacher {
  id: string;
  name: string;
  title: string;
  specialization: string;
  bio: string;
  experience: string;
  videoUrl: string;
  image: string;
}

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      {/* Video embed */}
      <div className="relative aspect-video w-full">
        <iframe
          src={teacher.videoUrl}
          title={`${teacher.name} tanıtım videosu`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          {/* Placeholder avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
            {teacher.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-text-dark">{teacher.name}</h3>
            <p className="text-sm font-medium text-primary">{teacher.title}</p>
          </div>
        </div>

        <div className="mb-3 inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">
          {teacher.specialization}
        </div>

        <p className="mb-3 text-sm text-text-muted">{teacher.bio}</p>

        <div className="flex items-center gap-1 text-sm font-medium text-text-dark">
          <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          {teacher.experience}
        </div>
      </div>
    </Card>
  );
}
