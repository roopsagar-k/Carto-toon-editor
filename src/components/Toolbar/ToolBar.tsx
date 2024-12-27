import { TextFormattingButtons } from "./TextFormattingButtons";
import { Editor } from "@tiptap/react";
import { AlignmentButton } from "./AlignmentsButton";
import { EditorCommandManager } from "@/services/EditorCommandManager";
import { TextLevelsButton } from "./TextLevels";
import { BulletList } from "./BulletList";
import { OrderList } from "./OrderList";
import { Blockquote } from "./BlockQuote";
import { CodeBlock } from "./CodeBlock";
import { Link } from "./Link";
import { ImageButton } from "./Image";

export const ToolBar = ({ editor }: { editor: Editor }) => {
  const commandManager = new EditorCommandManager(editor);
  return (
    <div className="flex mt-4 gap-1 items-center justify-center w-full">
      <TextFormattingButtons commandManager={commandManager} />
      <TextLevelsButton commandManager={commandManager} />
      <AlignmentButton commandManager={commandManager} />
      <BulletList commandManager={commandManager} />
      <OrderList commandManager={commandManager} />
      <Blockquote commandManager={commandManager} />
      <CodeBlock commandManager={commandManager} />
      <Link commandManger={commandManager} />
      <ImageButton commandManager={commandManager} />
    </div>
  );
};
