export default function ThemeBar() {
  return (
    <div className="flex space-x-2">
      <div>
        <div>bg</div>
        <div className="w-16 h-8 bg-light-bg dark:bg-dark-bg"></div>
      </div>
      <div>
        <div>primary</div>
        <div className="w-16 h-8 bg-light-primary dark:bg-dark-primary"></div>
      </div>
      <div>
        <div>text</div>
        <div className="w-16 h-8 bg-light-text dark:bg-dark-text"></div>
      </div>
      <div>
        <div>accent</div>
        <div className="w-16 h-8 bg-light-accent dark:bg-dark-accent"></div>
      </div>
      <div>
        <div>secondaryAccent</div>
        <div className="w-16 h-8 bg-light-secondaryAccent dark:bg-dark-secondaryAccent"></div>
      </div>
      <div>
        <div>warning</div>
        <div className="w-16 h-8 bg-warning dark:bg-warning"></div>
      </div>
      <div>
        <div>success</div>
        <div className="w-16 h-8 bg-success dark:bg-success"></div>
      </div>
      <div>
        <div>error</div>
        <div className="w-16 h-8 bg-error dark:bg-error"></div>
      </div>
    </div>
  );
}
