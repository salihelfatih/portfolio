import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project }) => {
  const {
    title,
    oneLiner,
    whatItDoes,
    myRole,
    keyDecisions,
    stack,
    links,
    image,
  } = project;

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      {image && (
        <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800">
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{oneLiner}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <section>
          <h4 className="font-semibold text-lg mb-2">What it does</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {whatItDoes}
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-lg mb-2">My role</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {myRole}
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-lg mb-2">Key decisions</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
            {keyDecisions.map((decision, index) => (
              <li key={index} className="leading-relaxed">
                {decision}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-lg mb-3">Stack</h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </CardContent>

      <CardFooter className="gap-3 pt-6">
        {links.demo && (
          <Button asChild variant="default" size="default">
            <Link
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </Link>
          </Button>
        )}
        {links.github && (
          <Button asChild variant="outline" size="default">
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
