
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Certification } from '@/types/database';

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCertifications(data || []);
    } catch (error) {
      console.error('Error fetching certifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section id="certifications" className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
                <h2 className="text-lg font-medium dark:text-white">Certifications</h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Loading certifications...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (certifications.length === 0) {
    return (
      <section id="certifications" className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
                <h2 className="text-lg font-medium dark:text-white">Certifications</h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400">No certifications available.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Award className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Certifications</h2>
            </div>
            <div>
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 dark:before:bg-gray-500 last:mb-0"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{cert.period}</div>
                  <div className="font-medium dark:text-white">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-primary dark:text-blue-400 hover:underline"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      cert.title
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</div>
                  {cert.description && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.description}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;
