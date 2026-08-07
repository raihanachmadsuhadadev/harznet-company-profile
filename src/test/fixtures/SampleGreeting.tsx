type SampleGreetingProps = {
  name: string;
};

export function SampleGreeting({ name }: SampleGreetingProps) {
  return <h1>Halo, {name}</h1>;
}
