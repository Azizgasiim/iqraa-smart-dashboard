export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          🎯 منصة إقرأ الذكية
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-8">
          Iqraa Smart Dashboard - Velvet Edition
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/primary-processing" className="p-6 border rounded-lg hover:bg-accent">
            <h2 className="text-xl font-semibold">📥 المعالجة الأولية</h2>
            <p className="text-muted-foreground">Box 1 - Primary Processing</p>
          </a>
          
          <a href="/interaction-expansion" className="p-6 border rounded-lg hover:bg-accent">
            <h2 className="text-xl font-semibold">🔄 التوسع التفاعلي</h2>
            <p className="text-muted-foreground">Box 2 - Expansion</p>
          </a>
          
          <a href="/search" className="p-6 border rounded-lg hover:bg-accent">
            <h2 className="text-xl font-semibold">🔍 البحث</h2>
            <p className="text-muted-foreground">Box 4 - Search</p>
          </a>
          
          <a href="/analytics" className="p-6 border rounded-lg hover:bg-accent">
            <h2 className="text-xl font-semibold">📊 التحليلات</h2>
            <p className="text-muted-foreground">Box 3 - Analytics</p>
          </a>
          
          <a href="/concept-exploration" className="p-6 border rounded-lg hover:bg-accent">
            <h2 className="text-xl font-semibold">💡 استكشاف المفاهيم</h2>
            <p className="text-muted-foreground">Concept Explorer</p>
          </a>
          
          <a href="/personas-lab" className="p-6 border rounded-lg hover:bg-accent">
            <h2 className="text-xl font-semibold">🎭 معمل الشخصيات</h2>
            <p className="text-muted-foreground">Personas Lab</p>
          </a>
        </div>
      </div>
    </main>
  );
}
